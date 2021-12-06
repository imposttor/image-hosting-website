class AddViewsToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :views, :integer, :null => false, :default => 0
  end
end
