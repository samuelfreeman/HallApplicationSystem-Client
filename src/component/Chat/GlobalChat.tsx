

import  { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { MoreVertical } from 'lucide-react'


const socket = io('https://hallapplicationsystem.onrender.com/', {
  transports: ['websocket'],
})

const GlobalChat = () => {
  const [chats, setChats] = useState<any[]>([])
  const [message, setMessage] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editMessage, setEditMessage] = useState('')
  const [student, setStudent] = useState<any>(null)
  const [members, setMembers] = useState<any[]>([])
  const bottomRef = useRef<HTMLDivElement>(null)
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  // 
  // globalChatCreated
  
  
  // 
  // globalMembers
  useEffect(() => {
    const storedStudent = JSON.parse(localStorage.getItem('student') || '{}');
    setStudent(storedStudent);
  
    // Fetch initial data
    socket.emit('globalGetChats');
    socket.emit('globalListMembers');
  
    // Set up socket listeners
    const handleNewChat = (newChat:any) => {
      if (!newChat.global) {
        // Use storedStudent directly since student state might not be updated yet
        newChat.senderName = storedStudent?.fullName;
        setChats(prev => [...prev, newChat]); // Add new messages to the end
      }
    };
  
    socket.on('globalAllChats', setChats);
    socket.on('globalChatCreated', handleNewChat);
    socket.on('chatUpdated', (updatedChat) => {
      setChats(prev => prev.map(chat => 
        chat.id === updatedChat.id ? {...chat, ...updatedChat} : chat
      ));
    });
    socket.on('chatDeleted', (chatId) => {
      setChats(prev => prev.filter(chat => chat.id !== chatId));
    });
    socket.on('globalMembers', setMembers);
  
    return () => {
      socket.off('globalAllChats');
      socket.off('globalChatCreated', handleNewChat);
      socket.off('chatUpdated');
      socket.off('chatDeleted');
      socket.off('globalMembers');
    };
  }, []); // Empty dependency array since we're using storedStudent directly
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chats])

  const handleSendMessage = () => {
    if (!message.trim() || !student?.studentId) return

    const chatPayload = {
      studentId: student.studentId,
      message,
    }

    socket.emit('globalCreateChat', chatPayload)
    socket.emit('globalGetChats');
    socket.on('globalAllChats', setChats);
    console.log(chats)
    setMessage('')
  }


  const handleViewMember = (member:any) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };
  const handleDelete = (id: string) => {
    socket.emit('deleteChat', { id: id })
  }

  const handleEdit = (id: string, currentMessage: string) => {
    setEditingId(id)
    setEditMessage(currentMessage)
  }

  const handleSaveEdit = (id: string) => {
    socket.emit('updateChat', { id: id, message: editMessage })
    setEditingId(null)
    setEditMessage('')
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className='flex justify-between'>

        <h2 className="text-xl font-bold mb-4">Global Chat</h2>
        {/* list members */}


        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="default" variant="ghost">
              View Members
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
          {members.map((member, index) => (
            <DropdownMenuItem
              key={index}
              className="text-sm cursor-pointer"
              onClick={() => handleViewMember(member)}
            >
              {member.fullName}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
        </DropdownMenu>
      </div>

{/* Member Info Modal */}
<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Member Information</DialogTitle>
            <DialogDescription>
              {selectedMember && (
                <div className="mt-2 space-y-1 text-sm">
                  <p><strong>Full Name:</strong> {selectedMember.fullName}</p>
                  <p><strong>Email:</strong> {selectedMember.email}</p>
                  <p><strong>Tel:</strong> {selectedMember.telephone}</p>
                  {/* Add more fields as needed */}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="space-y-2 max-h-[400px] overflow-y-auto mb-4" ref={bottomRef}>
        {chats.length === 0 ? (
          <p className="text-sm text-gray-500">No chats available for this room.</p>
        ) : (
          [...chats].reverse().map((chat, index) => {
            const isOwner = chat.student.fullName === student?.fullName
            const isEditing = editingId === chat.id

            return (
              <div key={index} className="p-2 border rounded ">
                {isEditing ? (
                  <>
                    <Input
                      value={editMessage}
                      onChange={(e) => setEditMessage(e.target.value)}
                      className="text-sm"
                    />
                    <div className="flex gap-2 ">
                      <Button size="sm" onClick={() => handleSaveEdit(chat.id)}>Save</Button>
                      <Button size="sm" variant="outline" onClick={() => setEditingId(null)}>Cancel</Button>
                    </div>
                  </>
                ) : (
                  <div className='flex justify-between'>

                    <p className="text-sm text-gray-700 ">
                      <strong>{isOwner ? 'You' : chat.student.fullName}:</strong> {chat.message}
                    </p>
                    {isOwner && (
                      <div className="flex justify-end">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-32">
                            <DropdownMenuItem onClick={() => handleEdit(chat.id, chat.message)}>
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDelete(chat.id)}>
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    )}

                  </div>
                )}
              </div>
            )
          })
        )}

      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSendMessage()
          }}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}

export default GlobalChat
