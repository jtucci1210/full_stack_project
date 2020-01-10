json.users do
    json.set! user.id do
        json.extract! user, :id, :username, :email, :location
    end
end