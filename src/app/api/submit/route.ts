import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const formName = formData["form-name"] || "unknown-form"

    // We proxy the submission to Google Apps Script silently.
    // Node.js fetch will naturally follow the 302 redirects from Google that Netlify Webhooks fail on.
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyqTKTIia2opqCU9zNTC2CVuDjwCHaZyP6-X8wXDEsDfdyLSB_Q_gc2G0hDBSaR1aXQoA/exec?token=LfT!d*w9caWje2NhM-m8MAdJ"

    // We format the payload identically to how Netlify Webhooks structured it
    // so that your Google Apps Script keeps working without requiring ANY changes!
    const netlifyStylePayload = {
      form_name: formName,
      data: formData
    }

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(netlifyStylePayload)
      // fetch implicitly follows redirects, solving the Google 302 bug!
    })

    if (!response.ok) {
      console.error("Failed to proxy submission to Google Apps Script")
      return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Submit error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
