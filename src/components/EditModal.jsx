"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Form, Input, Label, Modal, Surface, TextArea, Select, ListBox } from "@heroui/react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

export function EditModal({ idea }) {

    const { _id, title, shortDescription, estimatedBudget, targetAudience, imageURL, category, detailedDescription, problemStatement, proposedSolution, tags } = idea;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const idea = Object.fromEntries(formData.entries());


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(idea)
        })

        // const data = await res.json();

    }

    return (
        <Modal>
            <div className="flex flex-col gap-1">
                <Button size="xs" variant="outline" className={'hover:bg-cyan-200 rounded-sm w-full'}><FaRegEdit size={'xs'} />Edit</Button>
                {/* <Button size="xs" variant="danger" className={'hover:bg-red-700 rounded-sm w-full'}><FaRegTrashAlt size={'xs'} />Delete</Button> */}
            </div>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={handleSubmit} className="flex mx-auto flex-col gap-4 mt-10 bg-slate-100 p-5 rounded-md">

                                    <div className="flex flex-col gap-1">
                                        <Label>Idea Title</Label>
                                        <Input defaultValue={title} name="title" placeholder="Write your title" type="text" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Short Description</Label>
                                        <Input defaultValue={shortDescription} name="shortDescription" placeholder="Write a short description" type="text" required />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <Label>Detailed Description</Label>
                                        <TextArea defaultValue={detailedDescription} name="detailedDescription" required></TextArea>
                                    </div>

                                    <div className="flex flex-col gap-1">

                                        <Select defaultValue={category} name="category" className="w-[256px]" placeholder="Select Category" required>
                                            <Label>Category</Label>
                                            <Select.Trigger>
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>
                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="tech" textValue="Tech">
                                                        Tech
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="health" textValue="Health">
                                                        Health
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="ai" textValue="AI">
                                                        AI
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>
                                                    <ListBox.Item id="education" textValue="Education">
                                                        Education
                                                        <ListBox.ItemIndicator />
                                                    </ListBox.Item>

                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </div>




                                    <div className="flex flex-col gap-1">
                                        <Label>tags(optional)</Label>
                                        <Input defaultValue={tags} name="tags" placeholder="tags" type="text" />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <Label>ImageURL</Label>
                                        <Input defaultValue={imageURL} name="imageURL" placeholder="Image URL" type="text" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Estimated Budget (optional)</Label>
                                        <Input defaultValue={estimatedBudget} name="estimatedBudget" placeholder="Budget" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Target Audience</Label>
                                        <Input defaultValue={targetAudience} name="targetAudience" placeholder="Audience" type="text" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Problem Statement</Label>
                                        <Input defaultValue={problemStatement} name="problemStatement" placeholder="Write Problem Statement" type="text" required />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label>Proposed Solution</Label>
                                        <Input defaultValue={proposedSolution} name="proposedSolution" placeholder="Write Proposed Solution" type="text" required />
                                    </div>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit">
                                            Update Idea
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}