class EventsController < ApplicationController
	before_action :must_login, only: [:show, :edit, :new, :index, :create, :update, :destroy, :invitation]

	def new
		# binding.pry
		@users=User.all
	end

	def show
		# binding.pry
	end

	def index
		# binding.pry
		@events=Event.all
		@users=User.all
	end


	def create
		# binding.pry
		User.find(current_user).events << Event.new(event_params)
		
		if params["user_ids"]
		Event.last.users << User.find(params["user_ids"])
		end
		 redirect_to list_events_path
	end

	def edit
		# binding.pry
		@users=User.all
		@event=Event.find(params["event_id"])
		@current_event_user=@event.users
	end

	def update
		# binding.pry
		@event=Event.find(params["event_id"])
		@event.update(event_params)
		
		@event.users.clear

		if (params["user_ids"])
			@event.users << User.find(params["user_ids"])
		end
		@event.save

		redirect_to list_events_path
	end

	def destroy
		# binding.pry
		@event=Event.find(params[:id])
		@event.destroy
		redirect_to list_events_path
	end

	def invitation
		# binding.pry
		@a =[]
		current_user.participents.each do |p|
			@a << p.event_id
		end

		@events=Event.find(@a)

		respond_to do |format|
			format.html {redirect_to list_events_path}
			format.js
		end
	end
	


	
	


	private
	def event_params
		params.require(:event).permit(:title, :venue, :date, :time, :desc, :status )
	end
end
