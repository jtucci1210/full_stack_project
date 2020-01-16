Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do 
    resources :users, except: [:new, :edit] do 
      resources :groups, only: [:index, :remove_group_membership]
      resources :events, only: [:remove_rsvp, :index]
    end
    resources :groups, only: [:index, :show] do 
      resources :events, only: [:create, :index] 
      post :add, to: 'groups#add_group_membership', as: 'add'
      delete :remove, to: 'groups#remove_group_membership', as: 'remove'
    end
    resources :events, only: [:index, :show, :destroy, :update] do 
      post :add, to: 'events#add_rsvp', as: 'add'
      delete :remove, to: 'events#remove_rsvp', as: 'remove'
    end
    resource :session, only: [:create, :destroy]
  end
end
