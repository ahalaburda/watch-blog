class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :description, :image_url, :created_at, :updated_at
end
