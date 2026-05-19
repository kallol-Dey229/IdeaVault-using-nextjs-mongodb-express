'use client'


import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RightNav } from './RightNav';
import { authClient } from '@/lib/auth-client';


const Navbar = () => {


    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [open, setOpen] = useState(false);

    return (
        <div className=' bg-cyan-50 py-3 fixed w-full z-10 top-0 left-0 shadow-md'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto'>
                <div>
                    <Link href={'/'}>
                        <Image className='rounded-md' src={'/assets/logo1.png'} alt='logo' width={100} height={100}></Image>
                    </Link>
                </div>

                <ul className='flex gap-6'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/ideas'}>Ideas</Link>
                    </li>
                    {user && <div className='flex gap-6'>
                        <li>
                            <Link href={'/add-ideas'}>Add Ideas</Link>
                        </li>
                        <li>
                            <Link href={'/my-ideas'}>My Ideas</Link>
                        </li>
                        <li>
                            <Link href={'/my-interactions'}>My Interactions</Link>
                        </li>
                    </div>}

                </ul>


                {user && (
                    <div>
                        <RightNav />
                    </div>
                )}

                {!user && (
                    <Link href={'/login'} className='bg-cyan-800 text-white px-4 py-2 rounded-md'>Login</Link>
                )}
            </nav>
        </div>
    );
};

export default Navbar;