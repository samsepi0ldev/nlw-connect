'use client'

import { Copy, Link } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { InputField, InputRoot } from '@/components/ui/input'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyToClipboard() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <Link className="size-5" />
      <InputField type="text" defaultValue={inviteLink} readOnly />
      <Button size="icon" className="-mr-2" onClick={copyToClipboard}>
        <Copy className="size-4" />
      </Button>
    </InputRoot>
  )
}
