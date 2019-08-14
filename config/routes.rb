Rails.application.routes.draw do

  root to: 'landing#index'

  # match "/*path", to: redirect("/?redirect=%{path}"), via: :all
  get '/*path', to: 'application#index', format: false

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
