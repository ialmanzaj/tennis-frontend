import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import { ConnectButton } from '@rainbow-me/rainbowkit';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='h-full w-full'>
            <div className='flex-no-wrap flex'>
              <div
                style={{ minHeight: '716px' }}
                className='absolute hidden w-64 flex-col justify-between bg-gray-800 shadow sm:relative sm:flex md:h-full'
              >
                <div className='px-8'>
                  <div className='flex h-16 w-full items-center'></div>
                  <ul className='mt-12'>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'></span>
                      </a>
                      <div className='flex items-center justify-center rounded bg-gray-600 py-1 px-3 text-xs text-gray-300'>
                        ~
                      </div>
                    </li>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-400 hover:text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'></span>
                      </a>
                      <div className='flex items-center justify-center rounded bg-gray-600 py-1 px-3 text-xs text-gray-300'>
                        1
                      </div>
                    </li>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-400 hover:text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='border-t border-gray-700 px-8'>
                  <ul className='flex w-full items-center justify-between bg-gray-800'>
                    <li className='cursor-pointer pt-5 pb-3 text-white'>
                      <button
                        aria-label='show notifications'
                        className='rounded focus:outline-none focus:ring-2 focus:ring-gray-300'
                      ></button>
                    </li>
                    <li className='cursor-pointer pt-5 pb-3 text-white'>
                      <button
                        aria-label='open chats'
                        className='rounded focus:outline-none focus:ring-2 focus:ring-gray-300'
                      ></button>
                    </li>
                    <li className='cursor-pointer pt-5 pb-3 text-white'>
                      <button
                        aria-label='open settings'
                        className='rounded focus:outline-none focus:ring-2 focus:ring-gray-300'
                      ></button>
                    </li>
                    <li className='cursor-pointer pt-5 pb-3 text-white'>
                      <button
                        aria-label='open logs'
                        className='rounded focus:outline-none focus:ring-2 focus:ring-gray-300'
                      ></button>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className='absolute z-40 w-64 flex-col justify-between bg-gray-800 shadow transition duration-150 ease-in-out sm:hidden md:h-full'
                id='mobile-nav'
              >
                <button
                  aria-label='toggle sidebar'
                  id='openSideBar'
                  className='absolute right-0 mt-16 -mr-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded rounded-tr rounded-br bg-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'
                ></button>
                <button
                  aria-label='Close sidebar'
                  id='closeSideBar'
                  className='absolute right-0 mt-16 -mr-10 flex hidden h-10 w-10 cursor-pointer items-center justify-center rounded-tr rounded-br bg-gray-800 text-white shadow'
                ></button>
                <div className='px-8'>
                  <div className='flex h-16 w-full items-center'></div>
                  <ul className='mt-12'>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-300 hover:text-gray-500'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'>Dashboard</span>
                      </a>
                      <div className='flex items-center justify-center rounded bg-gray-600 py-1 px-3 text-xs text-gray-300'>
                        5
                      </div>
                    </li>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-400 hover:text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'>Products</span>
                      </a>
                      <div className='flex items-center justify-center rounded bg-gray-600 py-1 px-3 text-xs text-gray-300'>
                        8
                      </div>
                    </li>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-400 hover:text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'>Performance</span>
                      </a>
                    </li>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-400 hover:text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'>Deliverables</span>
                      </a>
                    </li>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-400 hover:text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'>Invoices</span>
                      </a>
                      <div className='flex items-center justify-center rounded bg-gray-600 py-1 px-3 text-xs text-gray-300'>
                        25
                      </div>
                    </li>
                    <li className='mb-6 flex w-full cursor-pointer items-center justify-between text-gray-400 hover:text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'>Inventory</span>
                      </a>
                    </li>
                    <li className='flex w-full cursor-pointer items-center justify-between text-gray-400 hover:text-gray-300'>
                      <a
                        href='javascript:void(0)'
                        className='flex items-center focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='ml-2 text-sm'>Settings</span>
                      </a>
                    </li>
                  </ul>
                  <div className='mt-48 mb-4 flex w-full justify-center'>
                    <div className='relative'>
                      <div className='absolute inset-0 m-auto ml-4 h-4 w-4 text-gray-300'></div>
                      <input
                        className='w-full rounded bg-gray-700 bg-gray-100  py-2 pl-10 text-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-100'
                        type='text'
                        placeholder='Search'
                      />
                    </div>
                  </div>
                </div>
                <div className='border-t border-gray-700 px-8'>
                  <ul className='flex w-full items-center justify-between bg-gray-800'>
                    <li className='cursor-pointer pt-5 pb-3 text-white'>
                      <button
                        aria-label='show notifications'
                        className='rounded focus:outline-none focus:ring-2 focus:ring-gray-300'
                      ></button>
                    </li>
                    <li className='cursor-pointer pt-5 pb-3 text-white'>
                      <button
                        aria-label='open chats'
                        className='rounded focus:outline-none focus:ring-2 focus:ring-gray-300'
                      ></button>
                    </li>
                    <li className='cursor-pointer pt-5 pb-3 text-white'>
                      <button
                        aria-label='open settings'
                        className='rounded focus:outline-none focus:ring-2 focus:ring-gray-300'
                      ></button>
                    </li>
                    <li className='cursor-pointer pt-5 pb-3 text-white'>
                      <button
                        aria-label='open logs'
                        className='rounded focus:outline-none focus:ring-2 focus:ring-gray-300'
                      ></button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Sidebar ends */}
              {/* Remove class [ h-64 ] when adding a card block */}

              <div className='w-screen bg-orange-100'>
                <div className='w-screen p-6 lg:flex lg:items-center'>
                  <div className=''>
                    <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>
                      Jake's Account ~ jake.eth
                    </h2>
                  </div>
                  <div className='mt-5 flex lg:mt-0 lg:ml-4'>
                    <span className='hidden sm:block'>
                      <ConnectButton label="Deposit" accountStatus="avatar"/>
                    </span>
                  </div>
                </div>

                <div className='container flex h-64 py-10 px-6'>
                  {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                  <div className='m-4 flex h-full w-1/2 rounded border-2 border-solid border-gray-200 bg-white'>
                    {/* Place your content here */}
                    <div className='h-full w-1/2 p-8'>
                      {/* Place your content here */}
                      <p className='text-2xl	font-medium text-gray-500'>
                        Credit limit
                      </p>
                      <p className='text-5xl font-bold'>$1,0000</p>
                    </div>
                    <div className='h-full w-1/2 p-8'>
                      {/* Place your content here */}
                      <p className='text-2xl	font-medium text-gray-500'>Spend</p>
                      <p className='text-5xl font-bold'>$462.23</p>
                    </div>
                  </div>
                  <div className='m-4 h-full w-1/2 rounded border-2 border-solid border-gray-300 bg-white'>
                    {/* Place your content here */}
                    <div className='h-full p-8'>
                      {/* Place your content here */}
                      <p className='text-2xl	font-medium text-gray-500'>
                        Your assets supply
                      </p>
                      <div className="w-full">
  <div className="mt-4 flex-col ">
    <div className="flex items-start p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>
      <div className="ml-4">
        <h2 className="font-semibold">ETH</h2>
      </div>
    </div>
    
    
  </div>
</div>

                     
                    </div>
                  </div>
                </div>
                <div className='flex items-center p-10'>
                  <div className='space-y-16'>
                    <div className='relative m-auto h-56 w-96 transform rounded-xl bg-red-100 text-white shadow-md transition-transform hover:scale-105 hover:shadow-2xl'>
                      <img
                        className='relative h-full w-full rounded-xl object-cover'
                        src='https://i.imgur.com/kGkSg1v.png'
                      />
                      <div className='absolute top-8 w-full px-8'>
                        <div className='flex justify-between'>
                          <div className>
                            <p className='font-light'></p>
                            <p className='font-mono font-bold tracking-widest'>
                              Jake Pimental
                            </p>
                          </div>
                          <img
                            className='w-14'
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1000px-Mastercard-logo.svg.png'
                          />
                        </div>
                        <div className='pt-1'>
                          <p className='font-light'>Num.</p>
                          <p className='tracking-more-wider font-mono font-medium'>
                            <strong>4642</strong> 3489 9867{' '}
                            <span className='absolute  rounded-full bg-blue-700 px-2 py-1 text-xs'>
                              ●●●●
                            </span>
                          </p>
                        </div>
                        <div className='pt-6 pr-6'>
                          <div className='flex justify-between'>
                            <div className>
                              <p className='text-xs text-xs font-light'>
                                
                              </p>
                              <p className='font-mono text-sm font-medium tracking-wider'>
                                jake.eth
                              </p>
                            </div>
                            <div className>
                              <p className='text-xs font-light'></p>
                              <p className='tracking-more-wider font-mono text-sm font-bold'>
                                Tennis card
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </section>
      </main>
    </Layout>
  );
}
