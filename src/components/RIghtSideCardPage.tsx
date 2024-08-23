"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface WorkExperience {
  title: string;
  description: string;
  shortDescription: string;
  content: string;
  technologies: string;
  logo: string;
}

const workExperiences: WorkExperience[] = [
  {
    title: "Mastercard",
    description: "Frontend Developer",
    shortDescription:
      "Carveout project for internal and external applications including banking and payment systems",
    content: `I am in a small frontend team and we are currently leading the effort to revamp the frontend of multiple internal applications. The goal of this project is to improve the overall user experience and streamline the company's internal processes. To achieve this, I am utilizing Next.js 12 and legacy code where necessary, ensuring seamless integration with existing systems. Effective communication and collaboration are key to the success of this project, as I am working closely with different teams and PO's to understand their unique requirements and ensure that the frontend aligns with their goals. As the project progresses, I am continuously iterating and improving the frontend to deliver the best possible user experience. My role as a Frontend Developer on this project requires a combination of technical expertise, project management skills, and effective communication. By leveraging my knowledge of Next.js 12 and legacy code, and maintaining effective coordination with different teams and PO's, I am confident that we will achieve our goals for this project.`,
    technologies: "React, Java, TypeScript, Figma, Jest, Playwright",
    logo: "/mastercard.png",
  },
  {
    title: "Kjøpskontrakt",
    description: "Full-stack Developer",
    shortDescription: "SAAS for car sales contracts in Norway",
    content: `Kjøpskontrakt (kjopskontrakt.no) is a SAAS product I developed as a side project. It creates buying contracts for selling cars in Norway. The application is built using modern web technologies and best practices, showcasing my ability to create full-stack applications from scratch. Key features and technologies: - Built with Next.js 14, leveraging the latest features for optimal performance - Utilized the shadcn component library with Tailwind CSS for a polished UI - Implemented backend functionality using Supabase - Integrated Stripe for secure payment processing - Developed robust user authentication, including email verification and password recovery flows. It has already had real world usecases where people have used this service to sell cars. This project demonstrates my proficiency in creating end-to-end solutions, from frontend design to backend implementation and third-party integrations. I am interested in all of it!`,
    technologies: "Next.js 14, Tailwind CSS, shadcn, Supabase, Stripe",
    logo: "/logocar.jpg",
  },
  {
    title: "SOS Sikkerhetsgruppen",
    description: "React Native Developer",
    shortDescription: "Bluetooth-enabled mobile app development",
    content: `I had the opportunity to work on the latest Bluetooth technology and design the frontend of the application. My job involved implementing new features, fixing bugs, and improving the overall user experience. During my six-month tenure, I worked closely with the app design and development team to ensure that the app was user-friendly and easy to navigate. I also tested the app on multiple devices and platforms to ensure its compatibility and performance. One of the key challenges I faced during the project was implementing the Bluetooth technology in the app, which required extensive research and testing to ensure its smooth functioning. I also had to design the app's frontend to ensure that it was visually appealing and easy to use. After months of hard work and dedication, I was able to successfully publish the SOS Sikkerhetsgruppen app on both the Google Play Store and Apple App Store. Overall, my six-month experience as a React-Native mobile developer on the SOS Sikkerhetsgruppen app was a valuable learning experience. I gained hands-on experience in implementing the latest technologies and honed my skills in app design and development. I am grateful for the opportunity to have worked on this project and am looking forward to my next challenge in the field.`,
    technologies: "React Native, Xcode, Android Studio",
    logo: "/sikkerhetsgruppen.jpg.png",
  },
  {
    title: "DigitalKey app (Voglio)",
    description: "Flutter Developer",
    shortDescription: "Developed Flutter app with offline capabilities",
    content: `During my time at Voglio, I was part of the team responsible for developing a flutter app called DigitalKey. My primary role was to work with the backend team to ensure that the app's requirements were met with new API solutions. Working on DigitalKey was an incredibly rewarding experience. I was able to use my skills in frontend development to make changes to the app's user interface and design. I also contributed drawings and suggestions to the overall design of the app, which helped to improve its usability and functionality. One of the biggest challenges I faced while working on DigitalKey was creating the authentication flow and making offline mode for the application. This required a lot of communication and collaboration, but ultimately, we were able to create a well-functioning app that was able to deliver on its promise. Overall, working on DigitalKey was a great learning experience for me. I was able to use my skills in frontend development and design to help create a useful and user-friendly app. Additionally, the experience of working with a team helped me to develop my communication and collaboration skills, which will be invaluable in my future work.`,
    technologies: "Flutter",
    logo: "/digitalkey.jpg",
  },
  {
    title: "Paradisreiser",
    description: "Full-stack Developer",
    shortDescription: "Enhanced admin panel and mobile apps",
    content: `As a part of my work experience with Paradisreiser, I was tasked with adding new features to the company's admin panel. To accomplish this, I utilized React and MUI as libraries to implement the necessary interface, logic, and functions that the customer requested. One of the key challenges I faced was ensuring that the new features were properly integrated with the backend, which was written in .NET. I spent a significant amount of time working with the backend to coordinate the integration and ensure that everything worked seamlessly. In addition to the new features for the admin panel, I also made adjustments to the company's mobile apps, which were written in Flutter for both Android and iOS. This involved implementing the same features that I had added to the admin panel, as well as making any necessary adjustments to ensure that the mobile apps were user-friendly and consistent with the overall design of the company's products. Overall, my work experience with Paradisreiser allowed me to hone my skills in React and MUI, as well as my ability to coordinate with other teams and ensure that the final product met the customer's expectations. I am proud of the work I did, and I believe that it made a significant contribution to the success of the company.`,
    technologies: "React, C#, Flutter",
    logo: "/paradisreiser.jpg",
  },
  {
    title: "Encryption and Cloud Security",
    description: "Java Developer",
    shortDescription: "Developed encryption for public transport ticketing",
    content: `This project involved developing an encryption solution for public transport ticketing for Entur, a Norwegian mobility company, through Capgemini. The primary objective was to encrypt the generation of electronic tickets and manage QR codes for physical tickets, all hosted on the Azure Cloud platform. Our team was responsible for implementing crucial security measures, including: Encryption and decryption processes, digital signature creation and verification, key management for securing information transferred between various system components. The solution was built as a Spring Boot application, leveraging the Java Crypto API for cryptographic operations. We adopted a test-driven development (TDD) approach, which resulted in high test coverage through comprehensive unit testing and acceptance testing. Key aspects of the project: Utilized Azure Cloud for hosting and scalability, implemented robust security measures for sensitive ticketing data, ensured compliance with relevant data protection regulations, focused on creating a seamless and secure user experience for public transport passengers, collaborated closely with Entur and Capgemini stakeholders to meet specific requirements.`,
    technologies:
      "Java, Spring Boot, Java Cryptography API, Test Driven Development, Docker",
    logo: "/entur.jpg",
  },
];

function WorkExperienceCard({
  experience,
  onClick,
}: {
  experience: WorkExperience;
  onClick: () => void;
}) {
  return (
    <Card
      className="flex cursor-pointer flex-col justify-between transition-all hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <div>
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-4">
            <Image
              src={experience.logo}
              alt={`${experience.title} logo`}
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <CardTitle className="text-xl">{experience.title}</CardTitle>
              <CardDescription className="mt-1 text-sm">
                {experience.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm ">{experience.shortDescription}</p>
        </CardContent>
      </div>
      <CardFooter>
        <p className="text-xs ">
          <span className="font-semibold">Technologies:</span>{" "}
          {experience.technologies}
        </p>
      </CardFooter>
    </Card>
  );
}

function RightSidePage() {
  const [selectedExperience, setSelectedExperience] =
    useState<WorkExperience | null>(null);

  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Work Experience
      </h1>
      <p className="mb-12 text-lg">
        As a consultant, I have worked in various companies and projects,
        gaining valuable experience in frontend development, cross-platform
        mobile development, and backend. Click on a card to learn more about
        each experience.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {workExperiences.map((experience, index) => (
          <WorkExperienceCard
            key={index}
            experience={experience}
            onClick={() => setSelectedExperience(experience)}
          />
        ))}
      </div>

      <Dialog
        open={selectedExperience !== null}
        onOpenChange={() => setSelectedExperience(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex items-center space-x-4">
              {selectedExperience && (
                <Image
                  src={selectedExperience.logo}
                  alt={`${selectedExperience.title} logo`}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              )}
              <div>
                <DialogTitle>{selectedExperience?.title}</DialogTitle>
                <DialogDescription>
                  {selectedExperience?.description}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="mt-4 max-h-[60vh]">
            <p className="mb-4 ">{selectedExperience?.content}</p>
            <p className="text-sm">
              <span className="font-semibold">Technologies:</span>{" "}
              {selectedExperience?.technologies}
            </p>
          </ScrollArea>
          <DialogClose asChild>
            <Button className="mt-4">Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default RightSidePage;
