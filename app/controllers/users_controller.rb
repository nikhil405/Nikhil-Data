class UsersController < ApplicationController
	before_action :must_login, only: [:show, :edit, :update]

	def welcome

	
	end

	

	def new
	

		@user=User.new
	end

	def show
		# binding.pry
	end

	def edit
		# binding.pry
		@user =current_user
	end

	def create
		@user=User.new(user_params)
		if @user.save
			flash[:success]="User created successfully"
			redirect_to login_path
		else
			flash[:danger]="Failed to create the user try again"
			
			redirect_to root_path
		end
		
	end

	def update
		# binding.pry
		@user =User.find(params[:id])
		if @user.update(user_params)
		flash[:success]="User updated successfully"
		redirect_to show_user_path
	else
			flash[:danger]="Failed to update user"

			render 'edit'
	end
	end

	def destroy
		# binding.pry
		@user = User.find(current_user.id)
		@user.destroy
		session[:user_id]=nil
		flash[:success]="Account deleted successfully"
     redirect_to root_path
	end

	private
	def user_params
		# binding.pry
		params.require(:user).permit(:firstname, :lastname, :username, :email, :phone, :password, :password_confirmation, :attachment)
	end
end
