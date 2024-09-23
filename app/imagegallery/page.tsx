'use client'
import { db } from "@/lib/db"
import CategoriesPage from "./_components/CategoriesPage"
import { getCourses } from "@/actions/get-courses"
import { auth } from "@clerk/nextjs/server"
import { useEffect, useState } from "react"
import { useAuth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import EventsList from "@/components/events-list"

const SearchPage = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const { userId} = useAuth()
  useEffect(() => {
    fetch('/api/event')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Events To Show</p>
  
  if(!userId){
    return redirect("/")
  }

  
  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
      </div>
      <div className="p-6 space-y-4">
        
        <EventsList 
          items={data}
        />
      </div>
    </>
  )
}

export default SearchPage