class Api::GroupsController < ApplicationController

    def show
        @group = Group.find(params[:id])
        if @group
            render "api/groups/show"
        else
            render json: @group.errors.full_messages, status: 404
        end
    end

    def index
        if params[:user_id]
            @groups = current_user.groups
        else 
            @groups = Group.all
        end
        render "api/groups/index"
    end

end
