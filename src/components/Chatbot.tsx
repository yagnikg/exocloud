'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import styles from './Chatbot.module.css';
import ReactMarkdown from 'react-markdown';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hello! I'm ExoAI. How can I help you optimize your cloud infrastructure today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            // eslint-disable-next-line react-hooks/purity
            id: Date.now(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');

        // Show loading state (optional, could add a "typing..." indicator here)
        const loadingMessageId = Date.now() + 1;
        // For now, we'll just wait for the response

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: newUserMessage.text }),
            });

            const data = await response.json();

            const botResponse: Message = {
                // eslint-disable-next-line react-hooks/purity
                id: loadingMessageId,
                text: data.error || data.response || "I'm having trouble connecting to the mainframe. Please try again.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error('Chat Error:', error);
            const errorResponse: Message = {
                id: loadingMessageId,
                text: "Communication error. Please check your connection.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, errorResponse]);
        }
    };



    return (
        <div className={styles.container}>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <div className={styles.avatar}>
                            <Bot size={24} />
                        </div>
                        <div className={styles.headerInfo}>
                            <h3>ExoAI Assistant</h3>
                            <p>Online</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                            <X size={20} />
                        </button>
                    </div>
                    <div className={styles.disclaimer}>
                        <div className={styles.marqueeContent}>
                            <span>⚠️ This chat bot is for information purpose only. AI can make mistakes in processing the data.</span>
                            <span>⚠️ This chat bot is for information purpose only. AI can make mistakes in processing the data.</span>
                        </div>
                    </div>
                    <div className={styles.messages}>
                        {messages.map((msg) => (
                            <div key={msg.id} className={`${styles.message} ${msg.sender === 'bot' ? styles.botMessage : styles.userMessage}`}>
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button className={styles.sendButton} onClick={handleSend}>
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </button>
        </div>
    );
}
