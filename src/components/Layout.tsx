import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mx-auto max-w-[1140px] px-5 lg:px-0">
            {children}
        </div>
    );
};

export default Layout;
