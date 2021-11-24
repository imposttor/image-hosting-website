class AddPrivacyToPosts < ActiveRecord::Migration[6.1]
  def change
      change_table :posts do |t|
          t.boolean :privacy
      end
  end
end
