"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export function SendReportDialog({ reportName }: { reportName: string }) {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" size="sm" className="gap-2">
          <Send className="h-4 w-4" />
          Send to client
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send live report</DialogTitle>
          <DialogDescription>
            Share “{reportName}” with a custom note. This is a mock action — no
            email is sent.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="email">Client email</Label>
            <Input id="email" placeholder="client@company.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="note">Message</Label>
            <textarea
              id="note"
              className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Here is the live campaign report…"
              defaultValue="Here is the live campaign report. Let me know if you want any slides updated."
            />
          </div>
        </div>
        {sent ? (
          <p className="text-sm text-emerald-500">Mock send successful.</p>
        ) : null}
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setSent(true);
              setTimeout(() => setOpen(false), 800);
            }}
          >
            Send
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
