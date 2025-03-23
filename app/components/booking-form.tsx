"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Calendar } from "../components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"

export function BookingForm() {
  const [date, setDate] = useState<Date>()

  // Mock time slots
  const timeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"]

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" placeholder="Enter your full name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="Enter your phone number" />
      </div>

      <div className="space-y-2">
        <Label>Booking Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date: Date) => date < new Date()} // Fix: Explicitly type the `date` parameter
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="time">Choose Time Slot</Label>
        <Select>
          <SelectTrigger id="time" className="w-full">
            <SelectValue placeholder="Select time slot" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((slot) => (
              <SelectItem key={slot} value={slot}>
                {slot}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests">Number of Guests</Label>
        <Input id="guests" type="number" min="1" defaultValue="2" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="special-requests">Special Requests</Label>
        <Textarea
          id="special-requests"
          placeholder="Any special requests or preferences?"
          className="resize-none"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full">
        Book Now
      </Button>

      <p className="text-xs text-muted-foreground text-center">By booking, you agree to our terms and conditions.</p>
    </form>
  )
}