Rails.application.routes.draw do
  resources :posts do
      collection do
          get 'feed'
      end
  end
  get '/posts/hashtag/:name', to:'posts#hashtags'
  devise_for :users
    root "posts#feed"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
