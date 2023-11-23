import React, { useRef } from 'react'
import Link from 'next/link'
import {
	FaDiscord,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
	FaTwitter
} from 'react-icons/fa'
import Image from 'next/image'
import { Footermobile } from '@/components/ui/footermobile/Footermobile'

export const Footer = () => {
	const partnerRef = useRef<HTMLAnchorElement>(null)

	const scrollToPartner = () => {
		if (partnerRef.current !== null) {
			partnerRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}
	return (
		<div className="flex w-[100%] flex-col items-center justify-center bg-neutral-600 font-semibold">
			<footer className="hidden h-auto flex-col-reverse items-center justify-evenly gap-6 bg-neutral-600 pb-20 pt-10 text-white md:flex md:flex-row md:items-start lg:h-[350px] lg:w-[97%] lg:gap-0 xl:w-[90%] 2xl:w-[100%] ">
				<div className="flex flex-col gap-2">
					<Image
						height={150}
						width={150}
						src="/whitelogo.png"
						alt=""
						className="w-[200px]"
					/>
					<h3 className="text-md w-52 pb-2 pt-6">
						Everything you need for your profession in a single
						subscription.
					</h3>
					<div className="flex pt-4">
						<span className="">Upler © 2023</span>
					</div>
				</div>

				<div className="flex flex-col gap-9 pt-4">
					<Link
						className="group relative inline-block "
						href="/software"
						onClick={scrollToPartner}
						ref={partnerRef}
					>
						Software
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[62px]"></span>
					</Link>
					<Link
						className=" group relative inline-block "
						href="#plans"
						onClick={scrollToPartner}
						ref={partnerRef}
					>
						Bundles
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[57px]"></span>
					</Link>
					<Link
						className=" group relative inline-block "
						href="/aboutUs"
						onClick={scrollToPartner}
						ref={partnerRef}
					>
						About Us
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[57px]"></span>
					</Link>
					<Link
						className=" group relative inline-block "
						href="/apply"
						onClick={scrollToPartner}
						ref={partnerRef}
					>
						Become Our Partner
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-full"></span>
					</Link>
				</div>
				<div className="flex flex-col ">
					<div className="flex flex-col gap-2 py-4 ">
						<h1 className="pb-3 text-lg font-semibold">
							Contact Us
						</h1>
						<span>upler.official@gmail.com</span>
					</div>
					<div>
						<h1 className="py-3 text-lg font-semibold ">
							{' '}
							Follow Us
						</h1>
						<div className="flex gap-6 text-2xl">
							<Link
								href="https://www.instagram.com/upler.ok/"
								target=" blank"
							>
								<FaInstagram className=" hover:scale-[1.05] hover:text-neutral-300" />
							</Link>
							<Link
								href="https://www.linkedin.com/company/upler/"
								target=" blank"
							>
								<FaLinkedin className=" hover:scale-[1.05] hover:text-neutral-300" />
							</Link>
							<Link href="https://youtube.com" target=" blank">
								<FaYoutube className=" hover:scale-[1.05] hover:text-neutral-300" />
							</Link>
							<Link
								href="https://twitter.com/UplerOfficial"
								target=" blank"
							>
								<FaTwitter className=" hover:scale-[1.05] hover:text-neutral-300" />
							</Link>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 pr-3 pt-4">
					<h1 className="pb-3 text-lg font-semibold">
						Recognized by
					</h1>
					<Image
						height={150}
						width={300}
						src="/microsoft.png"
						alt=""
						className="w-[300px]"
					/>
				</div>
			</footer>
			<Footermobile />
		</div>
	)
}
