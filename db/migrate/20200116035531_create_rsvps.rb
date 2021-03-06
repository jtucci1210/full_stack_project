class CreateRsvps < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvps do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false 
      t.timestamps
    end

    add_index :rsvps, [:user_id, :event_id], unique: true
    add_index :rsvps, :event_id
  end
end
