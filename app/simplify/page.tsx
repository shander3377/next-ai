"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
export default function SimplifyPage() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className=" inline-block inlinemax-w-lg text-center justify-center">
				<h1 className={title({ size: "lg", color: "violet", fullWidth: true })}>
					Choices
				</h1>
				<br />
				<h2 className={subtitle()}>Choose either to &nbsp;</h2>
				<h2 className={subtitle({ color: "violet" })}>Type Text&nbsp;</h2>
				<h2 className={subtitle()}> or &nbsp;</h2>
				<h2 className={subtitle({ color: "violet" })}>Upload Document&nbsp;</h2>
			</div>
			<div className="inline-block mt-14 items-center justify-center">
				<Button
					color="primary"
					variant="bordered"
					size="lg"
					className="mr-10"
					onPress={onOpen}
				>
					Type Text
				</Button>

				<Button color="primary" variant="bordered" size="lg" className="mr-10">
					Upload Document
				</Button>

				<Modal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					placement="top-center"
				>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1">
									Enter text
								</ModalHeader>
								<ModalBody>
									<Input
										autoFocus
										label="Text"
										placeholder="Enter your text"
										variant="bordered"
									/>
								</ModalBody>
								<ModalFooter>
									<Button color="danger" variant="flat" onPress={onClose}>
										Close
									</Button>
									<Button color="primary" onPress={onClose}>
										Submit
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</div>
		</section>
	);
}
