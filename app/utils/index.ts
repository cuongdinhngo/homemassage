export const getAssetUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (process.env.NODE_ENV !== 'production') {
    return `/${cleanPath}`
  }
  
  return `${useRuntimeConfig().app.baseURL}${cleanPath}`
}

export const getFlag = (locale: string) => {
  return getAssetUrl(`/flags/${locale}`)
}

export const getLogo = (logoName: string) => {
  return getAssetUrl(`/logos/${logoName}`)
}

export const getImage = (imageName: string) => {
  return getAssetUrl(`/images/${imageName}`)
}

export const getContact = (imageName: string) => {
  return getAssetUrl(`/contacts/${imageName}`)
}