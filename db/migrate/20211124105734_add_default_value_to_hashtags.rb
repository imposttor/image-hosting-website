class AddDefaultValueToHashtags < ActiveRecord::Migration[6.1]
    def change
        change_column :posts, :hashtags, :text, default: ""
    end
end
