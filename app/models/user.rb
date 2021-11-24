class User < ApplicationRecord
    attr_writer :login

    def login
        @login || self.phone || self.email
    end
    def self.find_for_database_authentication(warden_conditions)
        conditions = warden_conditions.dup
        if login = conditions.delete(:login)
            where(conditions.to_h).where(["lower(phone) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    elsif conditions.has_key?(:phone) || conditions.has_key?(:email)
        where(conditions.to_h).first
      end
    end
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :post
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
