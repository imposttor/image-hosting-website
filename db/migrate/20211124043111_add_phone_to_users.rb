class AddPhoneToUsers < ActiveRecord::Migration[6.1]
  def change
      change_table :users do |t|
          add_column :users, :phone, :string
      end
  end
end
