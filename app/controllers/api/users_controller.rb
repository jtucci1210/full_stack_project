class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

# Likely not needed because you never see all users 
#   def index
#     @users = User.all
#     render :index
#   end

# Need to decide if I want to give PATCH capabilities/ view will need to added too
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

# Need to decide if I want to give DELETE capabilities
  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render json: {}
    else
      render plain: "User does not exist."
    end
  end

#   This search method is likely not needed as you can't search for a user as a user
#   def search
#     @users = User.where("username LIKE '%#{params[:query]}%'")
#     render json: @users
#   end

  private

  def user_params
    # params.require(:user).permit(:username, :email)
    # Add password
    params.require(:user).permit(:username, :password, :email, :bio)
  end    
end
