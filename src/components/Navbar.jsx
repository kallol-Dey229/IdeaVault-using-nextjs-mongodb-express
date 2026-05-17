'use client'


import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {

    return (
        <div className=' bg-slate-100 py-3'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto'>
                <div>
                    <Image className='rounded-md' src={'/assets/logo1.png'} alt='logo' width={100} height={100}></Image>
                </div>
                
                <ul className='flex gap-6'>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/ideas'}>Ideas</Link>
                    </li>
                    <li>
                        <Link href={'/add-ideas'}>Add Ideas</Link>
                    </li>
                    <li>
                        <Link href={'/my-ideas'}>My Ideas</Link>
                    </li>
                    <li>
                        <Link href={'/my-interactions'}>My Interactions</Link>
                    </li>

                </ul>




                <ul className='flex gap-4 items-center'>
                    <li>
                        <Link href={'/profile'}>Profile</Link>
                    </li>


                    
                        <li>
                            <Avatar>
                                <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src=""/>
                                <Avatar.Fallback></Avatar.Fallback>
                            </Avatar>
                        </li>
                        
                            <li>
                                <Link href={'/login'}>Login</Link>
                            </li>
                            
                        
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;