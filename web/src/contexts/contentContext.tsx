import React, { createContext, useState } from "react";
import ArticleContent from "../components/content/ArticleContent";
import CommunityContent from "../components/content/CommunityContent";
import AboutContent from "../components/content/AboutContent";
import ProfileContent from "../components/content/ProfileContent";
import ComplaintContent from "../components/content/ComplaintContent";
import { useEffect } from "react";

export type ContentId =  "community" | "articles" | "about" | "profile" | "complaint";

type contentContextType = {
  shownContentId: ContentId | null;
  setShownContentId: (content: ContentId) => void;
  shownContent: React.ReactNode;
};

const ContentContext = createContext<contentContextType | null>(null);

const contentMap: Record<ContentId, React.ReactNode> = {
  community: <CommunityContent />,
  articles: <ArticleContent />,
  about: <AboutContent />,
  profile: <ProfileContent />,
  complaint: <ComplaintContent />,
};

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {

  const [shownContentId, setShownContentId] = useState<ContentId | null>("community");
  const [shownContent, setShownContent] = useState<React.ReactNode>(contentMap["community"]);

  useEffect(()=> {
     setShownContent(contentMap[shownContentId || "community"]);
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