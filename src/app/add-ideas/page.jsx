'use client'

import {Form, Input, Label, TextArea, Select, ListBox, Button } from "@heroui/react";

const AddIdeasPage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const idea = Object.fromEntries(formData.entries());


        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(idea)
        })

        const data = await res.json();
        
    }
    return (
        <Form onSubmit={handleSubmit} className="flex mx-auto min-w-3xl flex-col gap-4 mt-10 bg-slate-100 p-5 rounded-md">

            <div className="flex flex-col gap-1">
                <Label>Idea Title</Label>
                <Input name="title" placeholder="Write your title" type="text" required />
            </div>
            <div className="flex flex-col gap-1">
                <Label>Short Description</Label>
                <Input name="shortDescription" placeholder="Write a short description" type="text" required />
            </div>

            <div className="flex flex-col gap-1">
                <Label>Detailed Description</Label>
                <TextArea name="detailedDescription" required></TextArea>
            </div>

            <div className="flex flex-col gap-1">

                <Select name="category" className="w-[256px]" placeholder="Select Category" required>
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
                <Input name="tags" placeholder="tags" type="text" />
            </div>

            <div className="flex flex-col gap-1">
                <Label>ImageURL</Label>
                <Input name="imageURL" placeholder="Image URL" type="text" required />
            </div>
            <div className="flex flex-col gap-1">
                <Label>Estimated Budget (optional)</Label>
                <Input name="estimatedBudget" placeholder="Budget" type="text" />
            </div>
            <div className="flex flex-col gap-1">
                <Label>Target Audience</Label>
                <Input name="targetAudience" placeholder="Audience" type="text" required />
            </div>
            <div className="flex flex-col gap-1">
                <Label>Problem Statement</Label>
                <Input name="problemStatement" placeholder="Write Problem Statement" type="text" required />
            </div>
            <div className="flex flex-col gap-1">
                <Label>Proposed Solution</Label>
                <Input name="proposedSolution" placeholder="Write Proposed Solution" type="text" required />
            </div>

            <Button type="submit" variant="primary" className={'w-full rounded-sm '}>Submit</Button>
        </Form>
    );
};

export default AddIdeasPage;