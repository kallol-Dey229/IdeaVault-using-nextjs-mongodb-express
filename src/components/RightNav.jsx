"use client";

import { Button, Dropdown } from "@heroui/react";
import Link from "next/link";

export function RightNav() {
    return (
        <Dropdown>

            <Button className="rounded-full" aria-label="Menu" variant="secondary">
                U
            </Button>

            <Dropdown.Popover>

                <Dropdown.Menu>

                    <Dropdown.Item id="profile" textValue="Profile">
                        <Link href="/profile" className="block w-full">
                            Profile
                        </Link>
                    </Dropdown.Item>

                    <Dropdown.Item id="login" textValue="Login">
                        <Link href="/login" className="block w-full">
                            Login
                        </Link>
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown.Popover>

        </Dropdown>
    );
}