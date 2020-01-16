class Api::EventsController < ApplicationController

    def create
        @event = Event.new(event_params)
        @event.group_id = params[:group_id]
        @event.creator_id = current_user.id
        if @event.save
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def show 
        @event = Event.find(params[:id])
        if @event 
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 404
        end
    end

    def update
        @event = Event.find(params[:id])
        if @event.update(event_params)
        render "api/events/show"
        else
        render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if @event.destroy
            @group = @event.group
            render "api/groups/show"
        else
            render plain: "You can not delete this event"
        end
    end

    def index
        case
        when params[:group_id]
            @group = Group.find_by(id: params[:group_id])
            @events = @group.events
        when params[:user_id]
            @user = User.find_by(id: params[:user_id])
            @events = @user.events
        else
            @events = Event.all 
        end
            render "api/events/index" 
    end

    def add_rsvp
        @rsvp = Rsvp.new(user_id: current_user.id, event_id: params[:event_id])
        if @rsvp.save
            @event = Event.find(@rsvp.event_id)
            render "api/events/show"
        else
            render json: @rsvp.errors.full_messages, status: 404
        end
    end

    def remove_rsvp
        @rsvp = Rsvp.find_by(user_id: current_user.id, event_id: params[:event_id])
        if @rsvp.destroy 
            @event = Event.find(@rsvp.event_id)
            render "api/events/show"
        else
            render plain: "You are not currently attending this event"
        end
    end

    private

    def event_params
        params.require(:event).permit(:name, :date, :description, :venue_location, :start_time, :end_time, :cost, :creator_id, :group_id)
    end
end
