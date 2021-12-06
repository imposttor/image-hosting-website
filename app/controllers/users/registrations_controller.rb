# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  # DELETE /resource
  def destroy
   resource.destroy
   Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name)
   set_flash_message! :notice, :destroyed
   yield resource if block_given?
  end
end
