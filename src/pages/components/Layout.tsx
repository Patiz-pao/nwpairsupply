import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mx-auto max-w-[1140px]">
            {children}
        </div>
    );
};

export default Layout;
