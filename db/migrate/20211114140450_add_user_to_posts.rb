class AddUserToPosts < ActiveRecord::Migration[6.1]
  def change
      change_table :posts do |t|
          t.integer :user_id
      end
  end
end
