class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.integer :group_id, null: false
      t.integer :creator_id, null: false
      t.string :description, null: false 
      t.string :venue_location, null: false 
      t.string :start_time, null: false 
      t.string :end_time, null: false 
      t.string :cost, null: false 
      t.timestamps
    end

    add_index :events, :name, unique: true
    add_index :events, :group_id
    add_index :events, :creator_id
  end
end
