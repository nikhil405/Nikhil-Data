class Event < ActiveRecord::Base
	belongs_to :owner, class_name: "User"

	has_many :participents, dependent: :destroy
	has_many :users, through: :participents
end
