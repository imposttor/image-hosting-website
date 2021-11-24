class AddDefaultValueToPrivacy < ActiveRecord::Migration[6.1]
  def change
      change_column :posts, :privacy, :boolean, default: false
  end
end
