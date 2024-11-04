export function blogger(websiteId) {
    // Obfuscate the domain
    const domain = atob('aHR0cHM6Ly9jbG91ZC51bWFtaS5pcy9zY3JpcHQuanM=');
    
    // Obfuscate the script creation
    return `
        (function() {
            const _0x${Math.random().toString(36).slice(2)} = document.createElement('script');
            _0x${Math.random().toString(36).slice(2)}.src = '${domain}';
            _0x${Math.random().toString(36).slice(2)}.setAttribute('data-website-id', '${websiteId}');
            _0x${Math.random().toString(36).slice(2)}.defer = true;
            document.head.appendChild(_0x${Math.random().toString(36).slice(2)});
        })();
    `;
}