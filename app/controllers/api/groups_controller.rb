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

    def add_group_membership
        @membership = Membership.new(user_id: current_user.id, group_id: params[:group_id])
        if @membership.save!
            @group = Group.find(@membership.group_id)
            render "api/groups/show"
        else
            render json: @membership.errors.full_messages, status: 404
        end
    end

    def remove_group_membership
        @membership = Membership.find_by(
            user_id: current_user.id, group_id: params[:group_id]
        )
        if @membership.destroy
           @group = Group.find(@membership.group_id)
            render "api/groups/show"
        else
            render plain: "You are not a member of this group."
        end
    end

end
