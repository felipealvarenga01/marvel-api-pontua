function isMobileUserAgent(req: Request): boolean {
  const userAgent = req.headers.get('user-agent') ?? '';
  
  return Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );
}

export { isMobileUserAgent };
