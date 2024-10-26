import React, {FC} from "react";

export type ConfigProviderProps = {
    children?: React.ReactNode
}
export const ConfigProvider: FC<ConfigProviderProps> = ({
                                                            children
                                                        }) => {
    return <>{children}</>
}