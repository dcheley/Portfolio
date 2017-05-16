class ContactsController < ApplicationController
  def new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to root_url, notice: "Message sent. Thanks #{@contact.name}!"
    else
      render :new
    end
  end

private
def contact_params
    params.require(:contact).permit(:name, :organization, :phone, :email, :message)
  end
end
