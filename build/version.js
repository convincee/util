define([], function(){
	var
		rev = "$Rev: de0efca $".match(/[0-9a-f]{7,}/),
		version= {
			major: 1, minor: 13, patch: 1, flag: "",
			revision: rev ? rev[0] : NaN,
			toString: function(){
				var v= version;
				return v.major + "." + v.minor + "." + v.patch + v.flag + " (" + v.revision + ")";
			}
		};
	return version;
});
