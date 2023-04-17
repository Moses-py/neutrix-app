const EmailPref = () => {
  return (
    <>
      <div className="email_pref my-5">
        <h4 className="text-xs font-bold font-misc">Email Preferences</h4>
        {/* Toggles */}
        {/* TOggle 1 */}
        <div className="toggle1 my-4">
          <div className="flex items-center mb-4 text-xs font-secondary text-gray-900">
            <input
              id="default-checkbox-1"
              type="checkbox"
              value=""
              name="default-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox-1"
              className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              Email Notifications to me
            </label>
          </div>
        </div>
        {/* Toggle 2 */}
        <div className="flex items-center mb-4 text-xs font-secondary text-gray-900">
          <input
            id="default-checkbox-1"
            type="checkbox"
            value=""
            name="default-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox-1"
            className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
          >
            Email Project deadlines and assignments to me
          </label>
        </div>
        {/* Toggle 3 */}
        <div className="flex items-center mb-4 text-xs font-secondary text-gray-900">
          <input
            id="default-checkbox-1"
            type="checkbox"
            value=""
            name="default-checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox-1"
            className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
          >
            Get updates on new courses available on the platform
          </label>
        </div>
        {/* Toggle 4 */}
      </div>
    </>
  );
};
export default EmailPref;
