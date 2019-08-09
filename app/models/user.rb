class User < ActiveRecord::Base

	mount_uploader :attachment, AttachmentUploader
	has_many :events, foreign_key: :owner_id, dependent: :destroy
	has_many :participents, dependent: :destroy
	has_secure_password



		PASSWORD_FORMAT = /\A(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[[:^alnum:]])/
	validates :firstname,  presence: true
	validates :lastname,  presence: true
	validates :email,  presence: { message: "must be given please" }
	validates_uniqueness_of :email

validates :password,  presence: { message: "must be given please" },   format: {with: PASSWORD_FORMAT},   confirmation: true,   on: :create 
end

