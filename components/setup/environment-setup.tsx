"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Check, ExternalLink, Database, Key, Globe } from "lucide-react"

export function EnvironmentSetup() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const envVariables = [
    {
      key: "NEXT_PUBLIC_SUPABASE_URL",
      description: "Your Supabase project URL",
      example: "https://xyzcompany.supabase.co",
      icon: Globe,
    },
    {
      key: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      description: "Your Supabase anonymous/public key",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      icon: Key,
    },
    {
      key: "SUPABASE_SERVICE_ROLE_KEY",
      description: "Your Supabase service role key (server-side only)",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      icon: Database,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Supabase Environment Setup</h1>
        <p className="text-gray-600">
          Follow these steps to configure your Supabase environment variables for the NexaFlow website.
        </p>
      </div>

      {/* Step 1: Create Supabase Project */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              1
            </span>
            <span>Create Supabase Project</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">First, you need to create a new Supabase project if you haven't already.</p>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => window.open("https://supabase.com/dashboard", "_blank")}
              className="bg-green-600 hover:bg-green-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Go to Supabase Dashboard
            </Button>
          </div>
          <Alert>
            <AlertDescription>
              Click "New Project" and follow the setup wizard. Choose a strong password for your database.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Step 2: Get Environment Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              2
            </span>
            <span>Get Your Environment Variables</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600">Navigate to your project settings in Supabase and copy these values:</p>

          {envVariables.map((variable) => {
            const Icon = variable.icon
            return (
              <div key={variable.key} className="border rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{variable.key}</h3>
                    <p className="text-sm text-gray-600">{variable.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Input value={variable.example} readOnly className="font-mono text-sm" />
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(variable.key, variable.key)}>
                    {copied === variable.key ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            )
          })}

          <Alert>
            <AlertDescription>
              <strong>Where to find these:</strong>
              <br />
              1. Go to your Supabase project dashboard
              <br />
              2. Click on "Settings" in the sidebar
              <br />
              3. Click on "API" to find your URL and keys
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Step 3: Set Environment Variables */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              3
            </span>
            <span>Set Environment Variables</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">Create a .env.local file in your project root with these variables:</p>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400"># .env.local</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  copyToClipboard(
                    `NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here`,
                    "env-file",
                  )
                }
                className="text-gray-400 hover:text-white"
              >
                {copied === "env-file" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
            <div className="space-y-1">
              <div>NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here</div>
              <div>NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here</div>
              <div>SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here</div>
            </div>
          </div>

          <Alert>
            <AlertDescription>
              <strong>Important:</strong> Never commit your .env.local file to version control. Add it to your
              .gitignore file.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Step 4: Vercel Deployment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              4
            </span>
            <span>Deploy to Vercel</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            When deploying to Vercel, add these environment variables in your project settings:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Via Vercel Dashboard:</h4>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Go to your Vercel project</li>
                <li>2. Click "Settings" tab</li>
                <li>3. Click "Environment Variables"</li>
                <li>4. Add each variable</li>
              </ol>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Via Vercel CLI:</h4>
              <div className="bg-gray-100 p-2 rounded font-mono text-sm">vercel env add NEXT_PUBLIC_SUPABASE_URL</div>
            </div>
          </div>

          <Button
            onClick={() => window.open("https://vercel.com/docs/concepts/projects/environment-variables", "_blank")}
            variant="outline"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Vercel Environment Variables Guide
          </Button>
        </CardContent>
      </Card>

      {/* Step 5: Test Connection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              5
            </span>
            <span>Test Your Setup</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">After setting up your environment variables:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Local Development:</h4>
              <div className="bg-gray-100 p-2 rounded font-mono text-sm">npm run dev</div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Test Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• User registration</li>
                <li>• User login</li>
                <li>• Contact form submission</li>
                <li>• Dashboard access</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
