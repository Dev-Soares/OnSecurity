import React, { createContext, useState } from "react";
import HomeContent from "../components/content/HomeContent";
import { useEffect } from "react";

export type ContentId = "home" | "community" | "articles" | "about";

type contentContextType = {
  shownContentId: ContentId | null;
  setShownContentId: (content: ContentId) => void;
  shownContent: React.ReactNode;
};

const ContentContext = createContext<contentContextType | null>(null);

const contentMap: Record<ContentId, React.ReactNode> = {
  home: <HomeContent />,
  community: <div>Community Content</div>,
  articles: <div>Articles Content</div>,
  about: <div>About Us Content</div>,
};

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {

  const [shownContentId, setShownContentId] = useState<ContentId | null>("home");
  const [shownContent, setShownContent] = useState<React.ReactNode>(contentMap["home"]);

  useEffect(()=> {
     setShownContent(contentMap[shownContentId || "home"]);
  }, [shownContentId]);
    

  return (
    <ContentContext.Provider value={{ shownContentId, setShownContentId, shownContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = React.useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};