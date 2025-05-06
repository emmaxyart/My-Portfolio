"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  codeUrl: string
}

export default function ProjectCard({ title, description, tags, imageUrl, demoUrl, codeUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white-smoke/10 border-white-smoke/5 backdrop-blur-sm hover:border-white-smoke/30 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white-smoke/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-wine/20 text-white-smoke border-white-smoke/10">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 mt-auto pt-4">
          <Button asChild variant="outline" size="sm" className="border-white-smoke/20 text-white-smoke hover:bg-white-smoke/10">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="border-wine/20 text-wine bg-gradient-to-r from-wine/10 to-white-smoke/30 hover:from-wine/20 hover:to-white-smoke/40">
            <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
