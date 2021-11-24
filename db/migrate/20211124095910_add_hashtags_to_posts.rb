class AddHashtagsToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :hashtags, :text
  end
end
