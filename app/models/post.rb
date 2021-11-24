class Post < ApplicationRecord
    has_and_belongs_to_many :tags
    has_one_attached :image
    belongs_to :user
    after_create do
        hashtags = self.hashtags.scan(/#\w+/)
        hashtags.uniq.map do |hashtag|
            tag = Tag.find_or_create_by(name: hashtag.downcase.delete('#'))
            self.tags << tag
        end
    end
    before_update do
        self.tags.clear
        hashtags = self.hashtags.scan(/#\w+/)
        hashtags.uniq.map do |hashtag|
            tag = Tag.find_or_create_by(name: hashtag.downcase.delete('#'))
            self.tags << tag
        end
    end
end
