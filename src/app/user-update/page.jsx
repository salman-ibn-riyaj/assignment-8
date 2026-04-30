"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Plus } from "@gravity-ui/icons";
import { Button, Form, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const UserUpdatePage = () => {
  
  const handleUserUpdate = async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user);


    await authClient.updateUser({
    image: user.image,
    name: user.name
})
  }
  return (
    <div className="my-15">
      <Modal>
        <Button variant="secondary">Open User Update Form</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Plus className="size-5" />
                </Modal.Icon>
                
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleUserUpdate} className="flex flex-col gap-4">
                    <TextField className="w-full" name="name" type="text">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    <TextField className="w-full" name="image" type="text">
                      <Label>Image Url</Label>
                      <Input placeholder="Enter your url" />
                    </TextField>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">Update</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UserUpdatePage;
